import CoronaLMAONinja from "./coronaLMAONinja";
import { jest } from '@jest/globals';
const coronaTest= new CoronaLMAONinja

jest.setTimeout(100000);

describe('coronaLMAO',() => {
    it('should return an instance', () =>{
        const coronaLMAONinjaClass = new CoronaLMAONinja();

        expect(coronaLMAONinjaClass).toBeInstanceOf(CoronaLMAONinja);

    })
    describe('coronaLMAONinja', () =>{
        it('should return state data of deaths', async () => {
            const coronaLMAONinjaClass = new CoronaLMAONinja();
            const test = await coronaLMAONinjaClass.getState('New York');
            expect(test).toHaveProperty('deaths');
        })
    })
})
