#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SrilathaGigsS3Stack } from "../lib/srilatha-gigs-s3-stack";

const stackName: string = process.env.GIGS_STACK_NAME || "";
if (!(stackName && stackName.trim() && stackName.trim().length)) {
  console.error(`PARAMETER $GIGS_STACK_NAME NOT SET, got: ${stackName}`);
  process.exit(1);
}

const settings: any = {
  // Inherited from cdk.StackProps
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || "NOT_SET",
    region: process.env.CDK_DEFAULT_REGION || "NOT_SET",
  },
  stackName: stackName,
  permissionsBoundaryPolicyName: "ScopePermissions",
  subDomain: stackName.toLowerCase(),
  // in later sessions we will add more settings
};

const app = new cdk.App();
new SrilathaGigsS3Stack(app, `${settings.stackName}-TS-CdkStack`, settings);