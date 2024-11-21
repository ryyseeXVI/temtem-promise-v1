import { TemtemDex } from './index';
import fetch from 'node-fetch';

// src/index.test.ts

// Mock fetch
jest.mock('node-fetch');
const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('TemtemDex', () => {
    let temtemDex: TemtemDex;

    beforeEach(() => {
        temtemDex = new TemtemDex();
        jest.resetAllMocks();
    });

    describe('getTemtems', () => {
        it('should fetch temtems without parameters', async () => {
            const mockResponse = { ok: true, json: () => Promise.resolve([{ name: 'Platypet' }]) };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            const result = await temtemDex.getTemtems();
            
            expect(mockedFetch).toHaveBeenCalledWith('https://temtem-api.mael.tech/api/temtems');
            expect(result).toEqual([{ name: 'Platypet' }]);
        });

        it('should fetch temtems with parameters', async () => {
            const mockResponse = { ok: true, json: () => Promise.resolve([{ name: 'Platypet' }]) };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            const params = {
                names: 'Platypet',
                fields: 'name,type',
                expand: 'evolution',
                weaknesses: true
            };

            await temtemDex.getTemtems(params);
            
            expect(mockedFetch).toHaveBeenCalledWith(
                expect.stringContaining('names=Platypet')
            );
        });
    });

    describe('getTemtemById', () => {
        it('should fetch a specific temtem by id', async () => {
            const mockResponse = { ok: true, json: () => Promise.resolve({ id: 1, name: 'Platypet' }) };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            const result = await temtemDex.getTemtemById(1);
            
            expect(mockedFetch).toHaveBeenCalledWith('https://temtem-api.mael.tech/api/temtems/1');
            expect(result).toEqual({ id: 1, name: 'Platypet' });
        });
    });

    describe('error handling', () => {
        it('should throw error when API request fails', async () => {
            const mockResponse = { ok: false, status: 404 };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            await expect(temtemDex.getTemtems()).rejects.toThrow('HTTP error! status: 404');
        });
    });

    describe('getTypes', () => {
        it('should fetch types with parameters', async () => {
            const mockResponse = { ok: true, json: () => Promise.resolve([{ name: 'Fire' }]) };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            const params = {
                fields: 'name',
                limit: 10
            };

            const result = await temtemDex.getTypes(params);
            
            expect(mockedFetch).toHaveBeenCalledWith(
                expect.stringContaining('fields=name')
            );
            expect(result).toEqual([{ name: 'Fire' }]);
        });
    });

    describe('calculateWeaknesses', () => {
        it('should calculate weaknesses correctly', async () => {
            const mockResponse = { ok: true, json: () => Promise.resolve({ multiplier: 2 }) };
            mockedFetch.mockResolvedValueOnce(mockResponse as any);

            const params = {
                attacking: 'Fire',
                defending: 'Nature'
            };

            const result = await temtemDex.calculateWeaknesses(params);
            
            expect(mockedFetch).toHaveBeenCalledWith(
                expect.stringContaining('attacking=Fire')
            );
            expect(result).toEqual({ multiplier: 2 });
        });
    });
});