class Order{
  constructor(
    public endereco :string,
    public numero :number,
    public complemento: string,
    public paymentOption: string,
    public orderItems:OrdemItem[]
  ){}
}

class OrdemItem {
  constructor(
    public quantidade:number,
    public menuId:string

  ) {}
}

export {Order, OrdemItem}
