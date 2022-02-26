FROM alpine
# FROM python:3.8-slim-buster
# # Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
WORKDIR /
COPY IpUpdate.py /
RUN pip install stem
# RUN python IpUpdate.py
CMD python "IpUpdate.py"
# CMD [ "python", "IpUpdate.py"]