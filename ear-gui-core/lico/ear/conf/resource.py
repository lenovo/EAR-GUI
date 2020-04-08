"""
Copyright © 2020-present Lenovo
This file is licensed under both the BSD-3 license for individual/non-commercial use and
EPL-1.0 license for commercial use. Full text of both licenses can be found in
COPYING.BSD and COPYING.EPL files.
"""

import copy
import logging
import os
import uuid

from falcon.media.validators import jsonschema

from jinja2 import Environment, FileSystemLoader

from .etc import base

env = Environment(loader=FileSystemLoader('/etc/lico'))

logger = logging.getLogger(__name__)


class Template(object):
    @staticmethod
    def on_get(request, response):
        response.media = base


class GenerateConf(object):
    def __init__(self, download_dir):
        os.makedirs(download_dir, exist_ok=True)
        self.download_dir = download_dir

    @jsonschema.validate(
        {
            'type': 'object',
            'properties': {
                'params': {
                    'type': 'object',
                }
            },
            'required': ['params']
        }
    )
    def on_post(self, request, response):
        params = request.media["params"]
        base_params = copy.deepcopy(base)
        base_params.update(params)
        filename = '{0}.conf'.format(str(uuid.uuid1()))
        template = env.get_template('template.conf')
        with open(os.path.join(self.download_dir, filename), 'w') as f:
            f.write(template.render(base_params))
        response.media = {
            "filename": filename
        }


class ParseConf(object):
    def __init__(self):
        self.types_items = {
            'Policy': 'policys',
            'EnergyTag': 'energy_tags',
            'NodeName': 'special_nodes',
            'Island': 'islands'
        }

    def on_post(self, request, response):
        conf_json = self.__convert_to_json(
            request.get_param('file').file.read()
        )
        base_params = copy.deepcopy(base)
        base_params.update(conf_json)
        response.media = base_params

    def _guess_type(self, data):
        keys = data.keys()
        for keyword, _type in self.types_items.items():
            if keyword in keys:
                return _type

    def __convert_to_json(self, file_content):
        _json = {}
        for line in file_content.splitlines():
            line = line.decode('utf8').strip()
            if not line or line.startswith('#'):
                continue
            try:
                data = dict(map(lambda item: item.split('='), line.split()))
                if len(data) == 1:
                    _json.update(data)
                else:
                    if not any(data.values()):
                        continue
                    item_type = self._guess_type(data)
                    if item_type not in _json:
                        _json[item_type] = [data]
                    else:
                        _json[item_type].append(data)
            except ValueError:
                continue
        return _json
