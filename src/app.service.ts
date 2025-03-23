const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

import { Injectable } from '@nestjs/common';
import { ServiceName } from './enums/common';
import { ConfigResponseDto } from './dtos/config-response.dto';

@Injectable()
export class AppService {

  getConfigs(serviceName: ServiceName): ConfigResponseDto {
    const environment = process.env.NODE_ENV || "local";
    const globalCongifs = yaml.load(fs.readFileSync(path.join(__dirname, `./resources/${environment}/application.yml`), "utf8")) as Record<string, any>;
    const serviceConfigs = yaml.load(fs.readFileSync(path.join(__dirname, `./resources/${environment}/${serviceName}.yml`), "utf8")) as Record<string, any>;

    const finalConfig = _.merge(globalCongifs, serviceConfigs);

    return new ConfigResponseDto(finalConfig);
  }
}
