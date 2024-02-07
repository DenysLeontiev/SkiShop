namespace Core.Entities;

public class CustomerBasket
{
    public CustomerBasket()
    {
        
    }
    
    public CustomerBasket(int id) // because can be created from client
    {
        Id = id;
    }
    
    public int Id { get; set; }
    public List<BasketItem> Items { get; set; } = new();
}