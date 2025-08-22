import { getProduct } from './getProduct';

describe('getProduct', () => {
  it('returns the mocked product with the given id', async () => {
    const debugSpy = jest.spyOn(console, 'debug').mockImplementation();
    const product = await getProduct('123');

    expect(debugSpy).toHaveBeenCalledWith('Getting product with id 123...');
    expect(product).toEqual({
      id: 1,
      imageUrl: 'https://framerusercontent.com/images/dwsUDbqeEUic6MtNScUrnTEIJY.webp',
      name: 'Curso de Marketing Digital 2025',
      originalPrice: 497.0,
      currentPrice: 297.0,
      producer: 'João Silva',
      format: 'digital',
      deliveryTime: 'imediato',
    });

    debugSpy.mockRestore();
  });
});
