namespace Core.Entities;

public class CustomerBasket
{
    public CustomerBasket()
    {
        
    }
    
    public CustomerBasket(string id) // because can be created from client
    {
        Id = id;
    }
    
    public string Id { get; set; }
    public List<BasketItem> Items { get; set; } = new();
}