"""
Copyright © 2020-present Lenovo
This file is licensed under both the BSD-3 license for individual/non-commercial use and
EPL-1.0 license for commercial use. Full text of both licenses can be found in
COPYING.BSD and COPYING.EPL files.
"""

from .resource import GenerateConf, ParseConf, Template


def create_docker_app(global_config):
    import falcon
    from falcon_multipart.middleware import MultipartMiddleware

    api = falcon.API(middleware=[MultipartMiddleware()])

    api.req_options.strip_url_path_trailing_slash = True
    download_dir = dict(global_config).get('download_dir', '/tmp')
    api.add_route('/api/ear/conf/template/', Template())
    api.add_route('/api/ear/conf', GenerateConf(download_dir))
    api.add_route('/api/ear/conf/upload', ParseConf())

    return api
