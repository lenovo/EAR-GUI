#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Copyright © 2020-present Lenovo
This file is licensed under both the BSD-3 license for individual/non-commercial use and
EPL-1.0 license for commercial use. Full text of both licenses can be found in
COPYING.BSD and COPYING.EPL files.
"""

"""The setup script."""

from os import path
from setuptools import setup, find_packages
from pkg_resources import yield_lines

here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'requirements.txt')) as f:
    install_requires = list(yield_lines(f.read()))


setup(
    packages=find_packages(
        include=('lico*',)
    ),
    namespace_packages=['lico', 'lico.ear'],
    include_package_data=True,
    install_requires=install_requires,
    zip_safe=True,
    python_requires='>=3.5',
    setup_requires=[
        'setuptools>=33.0'
    ],
    entry_points={
        'paste.app_factory': [
            'docker = lico.ear.conf.factory:create_docker_app'
        ]
    },
    extras_require={
        'executable':  [
            'gunicorn>=19.7.1',
            'Paste>=2.0',
            'PasteDeploy>=1.5',
            'gevent>=1.1.2'
        ]
    }
)
