export const ratingCalculate = (player_a, player_b, result) => {
  const expected_a = 1 / (1 + Math.pow(10, (player_b - player_a) / 400));
  const k_a = player_a > 2000 ? 32 : 64;
  const rating_a = player_a + k_a * (result - expected_a);
  return rating_a;
};

// export const ratingCalculateMultiple = (player, result) => {
//   let expected = [];
//   result.forEach((result) => {
//     const expected_res = 1 / (1 + Math.pow(10, (player_b - player) / 400));
//     expected.push(expected_res);
//   });
//   const exp_sum = expected.reduce((a, b) => a + b, 0);
//   const res_sum = result.reduce((a, b) => a + b, 0);
//   const k = player > 2000 ? 16 : 32;
//   return;
// };
