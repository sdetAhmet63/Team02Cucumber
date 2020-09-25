@walmartArama
Feature: Walmartta Arama
  Scenario Outline: TestCase07 kullanici walmartta aramalar yapar
    Given kullanici "https://www.walmart.com" sayfasina gider
    And   kulanici walmart aramakutusunda "<urunler>" arar
    And   kullanici walmartda cikan sonucu yazdirir
    Then  kullanici walmart sayfasini kapatir

    Examples: Aranacak urunler
      |urunler|
      |maske  |
      |ipad   |
      |worldometer|
      |airpods     |