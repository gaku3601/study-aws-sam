sam package --template-file template.yml --s3-bucket gakussamtest --output-template-file package.yaml
sam deploy --template-file package.yaml --stack-name SAM-Sample2 --capabilities CAPABILITY_IAM
