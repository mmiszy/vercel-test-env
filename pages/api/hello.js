export default function handler(_req, res) {
  res.status(200).json({
    "process.env.TEST_VARIABLE": process.env.TEST_VARIABLE,
    "process.env.NEXT_PUBLIC_TEST_VARIABLE": process.env.NEXT_PUBLIC_TEST_VARIABLE,
    "process.env.TEST_COPY": process.env.TEST_COPY,
    "process.env.NEXT_PUBLIC_TEST_COPY": process.env.NEXT_PUBLIC_TEST_COPY,
    "process.env.TEST_INTERPOLATION": process.env.TEST_INTERPOLATION,
    "process.env.NEXT_PUBLIC_TEST_INTERPOLATION": process.env.NEXT_PUBLIC_TEST_INTERPOLATION,
  });
}
