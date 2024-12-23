#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CiCdStack } from '../lib/ci-cd-stack';

const app = new cdk.App();
new CiCdStack(app, 'CiCdStack', {
  env: { account: '253296135837', region: 'us-east-1' },
});