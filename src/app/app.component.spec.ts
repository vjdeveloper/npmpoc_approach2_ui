import { TestBed, async } from '@angular/core/testing';
import { fabonacciSeries } from 'iitech';

describe('AppComponent', () => {
  it(`should return fabonacci series`, async(() => {
    expect(fabonacciSeries(5)).toEqual('0,1,1,2,3');
  }));

  it('should return error', async(() => {
    expect(fabonacciSeries(-5)).toEqual('Not a possitive number');
  }));
});
