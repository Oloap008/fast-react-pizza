import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurants";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  console.log(fetcher.state);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={fetcher.state === "submitting"}>
        Make priority
      </Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
