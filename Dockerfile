FROM node:alpine
RUN npm i -g gatsby\
    && npm i\
    && apk add zsh curl wget git\
    && sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

CMD [ "zsh" ]