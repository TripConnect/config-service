import { Controller, Get, Param, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceName } from './enums/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ConfigResponseDto } from './dtos/config-response.dto';

@ApiTags('config-controller')
@Controller('/configs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:serviceName')
  @ApiParam({ name: 'serviceName', enum: ServiceName, enumName: 'ServiceName' })
  getConfigs(
    @Param('serviceName', new ParseEnumPipe(ServiceName))
    serviceName: ServiceName,
  ): ConfigResponseDto {
    return this.appService.getConfigs(serviceName);
  }
}
