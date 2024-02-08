using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BasketController : BaseApiController
{
    private readonly IBasketRepository _basketRepository;
    
    public BasketController(IBasketRepository basketRepository)
    {
        _basketRepository = basketRepository;
    }

    [HttpGet]
    public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
    {
        var basket = await _basketRepository.GetBasketAsync(id);

        return Ok(basket ?? new CustomerBasket(id));
    }

    [HttpPost]
    public async Task<ActionResult<CustomerBasket>> UpdateBasket([FromBody] CustomerBasket customerBasket)
    {
        var updatedBasket = await _basketRepository.UpdateBasketAsync(customerBasket);

        return Ok(updatedBasket);
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteBasketAsync(string id)
    {
        await _basketRepository.DeleteBasketAsync(id);

        return NoContent();
    }
}