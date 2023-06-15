# Copyright 2023 Telefónica Soluciones de Informática y Comunicaciones de España, S.A.U.
# PROJECT: Urbo
#
# This software and / or computer program has been developed by Telefónica Soluciones
# de Informática y Comunicaciones de España, S.A.U (hereinafter TSOL) and is protected
# as copyright by the applicable legislation on intellectual property.
#
# It belongs to TSOL, and / or its licensors, the exclusive rights of reproduction,
# distribution, public communication and transformation, and any economic right on it,
# all without prejudice of the moral rights of the authors mentioned above. It is expressly
# forbidden to decompile, disassemble, reverse engineer, sublicense or otherwise transmit
# by any means, translate or create derivative works of the software and / or computer
# programs, and perform with respect to all or part of such programs, any type of exploitation.
#
# Any use of all or part of the software and / or computer program will require the
# express written consent of TSOL. In all cases, it will be necessary to make
# an express reference to TSOL ownership in the software and / or computer
# program.
#
# Non-fulfillment of the provisions set forth herein and, in general, any violation of
# the peaceful possession and ownership of these rights will be prosecuted by the means
# provided in both Spanish and international law. TSOL reserves any civil or
# criminal actions it may exercise to protect its rights.

# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.183.0/containers/typescript-node/.devcontainer/base.Dockerfile

ARG VARIANT=18
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}
# FROM node:1.21-slim

# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#      && apt-get -y install --no-install-recommends chromium
# ENV CHROME_BIN=/usr/bin/chromium

# Needed to develop in Angular
RUN su node -c "npm install -g @angular/cli"
RUN su node -c "npm install -g nx"

# Liveserver for node
RUN su node -c "npm install -g nodemon"

# Npm dependency utility
RUN su node -c "npm install -g npm-check-updates"

# Install oracle binaries
# https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html#linuxinstall

# RUN su mkdir -p /opt/oracle
# RUN cd /opt/oracle
# RUN su wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip
# RUN su unzip instantclient-basic-linuxx64.zip
# RUN su apt-get install -y libaio1

# You need to add the library to the linking path, either using ldconfig (have a look to root Dockerfile to
# see how it can be done) or setting LD_LIBRARY_PATH manually after starting the container. More info
# at https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html#install-the-free-oracle-instant-client-basic-zip-file
