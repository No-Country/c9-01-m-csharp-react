namespace BooksDTOs;

public record NewBookDTO(string Name, string Editorial, string Author, string AuthorCountry,
    DateTime EditionDate, decimal Price, string PhotoUrl);
public record NewGenderDTO(string Name);
public record NewBookGenderDTO(int BookId, int GenderId);

public record BookDTO(int Id, string Name, string Editorial, string Author, string AuthorCountry,
    DateTime EditionDate, decimal Price, string PhotoUrl);
public record GenderDTO(int Id, string Name);
public record BookGenderDTO(int Id, int BookId, int GenderId);
