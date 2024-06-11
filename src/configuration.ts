import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'loadsh';
const YAML_CONFIG_COMMON_FILENAME = 'config.yml';
const YAML_CONFIG_DEV_FILENAME = 'config.dev.yml';
const YAML_CONFIG_PROD_FILENAME = 'config.prod.yml';
const filePath=join(__dirname,'../config',YAML_CONFIG_COMMON_FILENAME)
console.log('first', process.env.NODE_ENV)
let envPath=process.env.NODE_ENV==='production'?YAML_CONFIG_PROD_FILENAME:YAML_CONFIG_DEV_FILENAME
    envPath=join(__dirname,'../config',envPath)

const commonConfig=yaml.load(readFileSync(filePath, 'utf8'));
const envConfig=yaml.load(readFileSync(envPath, 'utf8'));
export default ()=>{
  return _.merge(commonConfig,envConfig);
}