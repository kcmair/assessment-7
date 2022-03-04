| Array Size | Append Runtime | Insert Runtime |
|------------|----------------|----------------|
|         10 |         152 µs |          57 µs |
|        100 |         166 µs |          76 µs |
|       1000 |         338 µs |         401 µs |
|      10000 |       1,114 µs |      14,031 µs |
|     100000 |       4,656 µs |   1,783,958 µs |

Initially, with a very small array, the .push method takes a little longer than the .shift method. I am assuming this is because the .push method is a slightly more complex function because it has to figure out where the end of the array is before it can execute whereas .unshift just goes straight to index 0. As the array gets larger though the .push runtime increases at an almost linear rate indicating it’s time complexity as O(n) but the .unshift runtime increases exponentially indicating a time complexity of O(n^2).