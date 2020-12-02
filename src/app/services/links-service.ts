export class LinksService 
{
    private linksItem: string[] = [
        "https://github.com/ForsakenAnton",
        "#",
        "#",
        "#",
    ];

    getLinks(): string[] {
        return this.linksItem;
    }
}