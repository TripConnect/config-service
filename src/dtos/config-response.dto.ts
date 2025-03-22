import { ApiProperty } from "@nestjs/swagger";

export class ConfigResponseDto {

    @ApiProperty({ example: { foo: 'value1', bar: 'value2' }, type: Object })
    data: Record<string, any>;

    constructor(data: Record<string, any> = {}) {
        this.data = data;
    }
}
