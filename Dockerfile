# Copyright © 2020-present Lenovo
# This file is licensed under both the BSD-3 license for individual/non-commercial use and
# EPL-1.0 license for commercial use. Full text of both licenses can be found in
# COPYING.BSD and COPYING.EPL files.

FROM node:12.0
MAINTAINER wangliang23@lenovo.com
USER root

RUN apt-get update
RUN apt-get install -y nginx gunicorn3 python3-gevent python3-setuptools python3-jsonschema python3-jinja2 python3-paste python3-pastedeploy

WORKDIR /root
EXPOSE 443
CMD ["/root"]
ENTRYPOINT nginx && /usr/bin/gunicorn3 --paste /etc/lico/ear-gui.ini --bind :8080 --log-config /etc/lico/ear-gui.ini --workers 5 --threads 10 --timeout 3600 --worker-class gevent --keep-alive 65 --log-level info

ADD ./ear-gui-core/etc/ear-gui-core.ini /etc/lico/ear-gui.ini
ADD ./ear-gui-core/etc/template.conf /etc/lico/template.conf
ADD ./ear-gui-core/etc/nginx.conf /etc/nginx/nginx.conf
ADD ./ear-gui-core/etc/server.crt /etc/nginx/server.crt
ADD ./ear-gui-core/etc/server.key /etc/nginx/server.key
ADD ./ear-gui-core /root/
ADD ./ear-gui-portal /root/
CMD ["/root/ear-gui-core"]
RUN python3.5 setup.py install
CMD ["/root/ear-gui-portal"]
RUN npm install
RUN npm run build
RUN mv ./dist/ /etc/lico/portal/
CMD ["/root"]
RUN rm -rf ./ear-gui-*
