# Pandoc Binary for AWS Lambda
Last update: 2017 July 19
Pandoc version: 1.19.2.1, with Haskell 8.0.1 and Cabal 1.24.0.0
Amazon Linux AMI version: amzn-ami-hvm-2016.03.3.x86_64-gp2
Kernel version: 4.4.11-23.53.amzn1.x86_64

# Usage
Pandoc.process()

# Developing
For building pandoc binary for Amazon AWS Lambda using Amazon Linux AMI.

Before you provision EC2 instances for building pandoc binary, check [Lambda Execution Environment and Available Libraries](https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html) for the version of AMI image to be provisioned.

Haskell version: 8.0.1
Cabal version: 1.24.0.0

1. Clone this repository and run the build script for building the gzipped binary
```
git clone https://github.com/bedatse/lambda-pandoc-native.git
cd lambda-pandoc-native
bash ./build-pandoc.sh
```
2. Resulting binary will be available as `pandoc.gz`

3. Download the gzipped binary from EC2 and put it in `vendor` folder
