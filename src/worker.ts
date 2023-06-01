import {
  ComputedValuesResponse,
  WorkerRequests,
  WorkerRequestType,
  WorkerResponses,
  WorkerResponseType
} from "@/types/WorkerData";
import {PlayerComputed} from "@/types/Player";
import {Monster} from "@/types/Monster";
import CombatCalc from "@/lib/CombatCalc";

/**
 * Method for computing the calculator values based on given loadouts and Monster object
 * @param loadouts
 * @param m
 */
const computeValues = (loadouts: PlayerComputed[], m: Monster) => {
  let res = [];

  for (let [i, p] of loadouts.entries()) {
    let calc = new CombatCalc(p, m);
    res.push({
      npcDefRoll: calc.getNPCDefenceRoll(),
      maxHit: calc.getMaxHit(),
      maxAttackRoll: calc.getMaxAttackRoll()
    })
  }

  return res;
}

self.onmessage = (e: MessageEvent<string>) => {
  const data = JSON.parse(e.data) as WorkerRequests;
  let res: WorkerResponses;

  // Interpret the incoming request, and action it accordingly
  switch (data.type) {
    case WorkerRequestType.RECOMPUTE_VALUES:
      res = {type: WorkerResponseType.COMPUTED_VALUES, data: computeValues(data.data.loadouts, data.data.monster)} as ComputedValuesResponse;
      break;
    default:
      console.debug(`Unknown data type sent to worker: ${data.type}`);
      return;
  }

  // Send message back to the master
  self.postMessage(JSON.stringify(res));
}

export {}