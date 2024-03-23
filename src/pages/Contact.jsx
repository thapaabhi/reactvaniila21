import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contect() {
  const onSubmit = (data) => {
    console.log({ data });
  };

  const stigma = yup.object().shape({
    name: yup.string("write name boi").required("boi write name"),
    email: yup.string().email(),
    age: yup.number().positive().integer().min(20, "be more than 20"),
    password: yup.string().max(20).min(4),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password not same"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stigma),
  });
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white p-8 shadow-md rounded-md w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Registration Form
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="age">
              Age:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="number"
              id="age"
              name="age"
              placeholder="Your age"
              required
              {...register("age")}
            />
            <p className="red text-sm">{errors.age?.message}</p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              required
              {...register("password")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              {...register("confirm password")}
            />
            <p>{errors.confirmpassword?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
