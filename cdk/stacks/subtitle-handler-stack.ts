import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SubtitleHandlerStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'CdExampleQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });

        new NodejsFunction(this, 'helloWorld', {
            functionName: 'helloWorld',
            runtime: Runtime.NODEJS_18_X,
            handler: 'handler',
            entry: './lambda/index.ts',
        });
    }
}
