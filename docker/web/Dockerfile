FROM node:16-alpine3.12

ENV DIR_APP /home/web

RUN mkdir -p $DIR_APP/node_modules \
    && chown -R node:node $DIR_APP

WORKDIR $DIR_APP

COPY --chown=node:node . .

RUN npm install -g @nestjs/cli
RUN yarn

USER node

EXPOSE 9000

CMD ["yarn" ,"start:dev"]