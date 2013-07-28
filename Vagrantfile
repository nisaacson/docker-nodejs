# -*- mode: ruby -*-
# vi: set ft=ruby :
install_docker = <<SCRIPT
# Add the PPA sources to your apt sources list.
echo "Installing Docker"
sudo apt-get update && sudo apt-get install linux-image-generic-lts-raring
sudo apt-get install -y python-software-properties && sudo add-apt-repository ppa:dotcloud/lxc-docker
# Update your sources
sudo apt-get update
# Install, you will see another warning that the package cannot be authenticated. Confirm install.
sudo apt-get install -y lxc-docker
SCRIPT

install_node = <<SCRIPT
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs
SCRIPT

hosts = %Q[
  financial.dev 192.168.30.30
  postgres.dev  192.168.30.31
  ].split("\n").map{|e| e.strip}.delete_if{|e| e.strip.empty? || e =~ /\A#/ }.map{|e| e.split(" ").map(&:strip) }
Vagrant.configure("2") do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  hosts.each do |host, ip|
    config.vm.define host.to_sym do |box|
      box.vm.hostname = host.to_s
      box.vm.network :private_network, ip: ip
    end
  end

  config.vm.box = "precise64_vagrant"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.provision :shell, :inline => 'sudo apt-get install -y make'
  config.vm.provision :shell, :inline => install_node
#  config.vm.provision :shell, :inline => install_docker

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network :forwarded_port, guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network :private_network, ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network :public_network

  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true
end
