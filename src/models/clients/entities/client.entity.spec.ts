import { Client } from './client.entity';

describe('Client class', () => {
  it('Should make a client with fields', () => {
    const client = new Client();
    expect(client).toBeTruthy();
    expect(client.client_id).toBe('');
    expect(client.client_name).toBe('');
    expect(client.total_to_pay).toBe(NaN);
  });
  it('Should make a client with id only', () => {
    const client = new Client('id');
    expect(client).toBeTruthy();
    expect(client.client_id).toBe('id');
    expect(client.client_name).toBe('');
    expect(client.total_to_pay).toBe(NaN);
  });
  it('Should make a client with name only', () => {
    const client = new Client(null, 'client', null);
    expect(client).toBeTruthy();
    expect(client.client_id).toBe('');
    expect(client.client_name).toBe('client');
    expect(client.total_to_pay).toBe(NaN);
  });
  it('Should make a client with name price', () => {
    const client = new Client(null, null, 1);
    expect(client).toBeTruthy();
    expect(client.client_id).toBe('');
    expect(client.client_name).toBe('');
    expect(client.total_to_pay).toBe(1);
  });
  it('Should make a client with all fields', () => {
    const client = new Client('id', 'client', 1);
    expect(client).toBeTruthy();
    expect(client.client_id).toBe('id');
    expect(client.client_name).toBe('client');
    expect(client.total_to_pay).toBe(1);
  });
});
