import { assert } from 'chai';
import avg from '../avg.js'; // Ensure the .js extension is specified

describe('AVG', function() { 
  it('should give average of the rating of 10', function() {
    const result = avg([10, 10, 10]); // Pass ratings as an array
    assert.equal(result, '10.00'); // Expected format if toFixed(2) is used
  });
});
