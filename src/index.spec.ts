/* eslint-disable @typescript-eslint/tslint/config */
import * as expect from 'expect';
import * as lib from './index';

it('smoke', () => {
    expect(lib).toBeTruthy();
});

it('new line is trimmed', () => {
    const result = lib.getLastTagSync();
    expect(result.slice(-1)).toNotEqual('\n');
});

