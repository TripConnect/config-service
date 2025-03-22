const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

import { Injectable } from '@nestjs/common';
import { ServiceName } from './enums/common';
import { ConfigResponseDto } from './dtos/config-response.dto';

@Injectable()
export class AppService {

  getConfigs(serviceName: ServiceName): ConfigResponseDto {
    const globalCongifs = yaml.load(fs.readFileSync(path.join(__dirname, "./resources/development/application.yml"), "utf8")) as Record<string, any>;
    const serviceConfigs = yaml.load(fs.readFileSync(path.join(__dirname, `./resources/development/${serviceName}.yml`), "utf8")) as Record<string, any>;
    return new ConfigResponseDto({
      ...globalCongifs,
      ...serviceConfigs
    });
  }
}
