FROM ubuntu:12.10
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN apt-get install -y build-essential
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install -g npm
npm install -g forever
ADD src /opt/tabrific/finacial
cd /opt/tabrific/finacial && npm link
CMD tabrific-financial
