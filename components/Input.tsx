import { Input, useInput } from "@nextui-org/react";
import React from "react";
import { isValidUrl } from '../lib/utils';

export default function () {
  const { value, reset, bindings } = useInput("");

  React.useMemo(() => {
    let valid = isValidUrl(value)
    if (valid) {

    }
    //console.log(valid)
  }, [value])
  return (
    <Input
      {...bindings}
      size="xl"
      aria-label="url"
      labelLeft="url"
      placeholder="https://google.com"
      type="url"
      animated={false}
      clearable
    />
  )
}