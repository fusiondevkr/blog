## update and install some things we should probably have
apt-get update
apt-get install -y \
  curl \
  git \
  gnupg2 \
  jq \
  sudo \
  zsh

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
cp -R /root/.oh-my-zsh /home/$USERNAME
cp /root/.zshrc /home/$USERNAME
sed -i -e "s/\/root\/.oh-my-zsh/\/home\/$USERNAME\/.oh-my-zsh/g" /home/$USERNAME/.zshrc
chown -R $USER_UID:$USER_GID /home/$USERNAME/.oh-my-zsh /home/$USERNAME/.zshrc

# Enable nvm
. ~/.nvm/nvm.sh

# Install node.js 14.x LTS
nvm install --lts=fermium

# Use the npm 14.x LTS
nvm use --lts=fermium

# Install oh-my-zsh plugins
npm install -g spaceship-prompt --unsafe-perm

# Install Yarn
npm install -g yarn --unsafe-perm

# Install Gatsby
npm install -g gatsby-cli --unsafe-perm

# Install BooGi
npm install -g boogi-cli --unsafe-perm
