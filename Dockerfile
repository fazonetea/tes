FROM fusuf/whatsasena:publicbeta

RUN git clone https://github.com/fazonetea/tes /root/tes
RUN mkdir /root/tes/bin/
WORKDIR /root/tes/

ENV TZ=Europe/Istanbul
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

CMD ["node", "bot.js"]
