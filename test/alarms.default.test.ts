import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CloudWatchLambdaFunctionAlarms } from '../src';

describe('Alarms default Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestStack');

  new CloudWatchLambdaFunctionAlarms(stack, 'CloudWatchLambdaFunctionAlarms');

  const template = Template.fromStack(stack);

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});