import CommonUtils from '../Utils/commonUtils.ts';
import {expect} from '@playwright/test';
import { test as baseTest} from './pom-fixtures.ts';
type commonfixtures={
commonUtils:CommonUtils;

}
export const test =baseTest.extend<commonfixtures>({
    commonUtils:async({},use)=>{

        const commonUtils=new CommonUtils();

         use(commonUtils);}
    })   