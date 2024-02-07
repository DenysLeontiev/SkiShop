using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data;

public class BasketRepository : IBasketRepository
{
    public Task<CustomerBasket> GetBasketAsync(string basketId)
    {
        throw new NotImplementedException();
    }

    public Task<CustomerBasket> UpdateBasketAsync(CustomerBasket customerBasket)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteBasketAsync(string basketId)
    {
        throw new NotImplementedException();
    }
}