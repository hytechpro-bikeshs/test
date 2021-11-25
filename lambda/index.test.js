const fun = require('./index');

// it('returns api response', async () => {
//   const title = await fun();  // Run the function
//   expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
// });

it('returns api response', async () => {
    const title = await fun.handle();  // Run the function
    expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
  });