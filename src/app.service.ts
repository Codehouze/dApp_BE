import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class AppService {
  getLastBlock(): any {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
  getLastName(): string {
    const lastName = this.getUserName();
    return lastName;
  }
 getBlock
 (): any {
    const provider = ethers.getDefaultProvider('goerli');
    return  provider.getBlock('latest');
  }
  getUserName(): string {
    const userName = 'codehouze';
    return userName;
  }
}
