import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import Select, { ActionMeta, MultiValue, StylesConfig } from "react-select";

export interface SelectProps {
  value: any[];
  onChange: (newValue: MultiValue<any>, actionMeta: ActionMeta<any>) => void;
  isLoading: boolean;
  options: { value: string; label: string }[] | [];
}

const colourStyles: StylesConfig<any> = {
  control: (styles) => {
    return {
      ...styles,
      height: "40px!important",
      backgroundColor: "#272838",
      border: "none !important",
      outline: "none !important",
      boxShadow: "none !important",
      ":hover": {
        cursor: "pointer",
      },
    };
  },
  option: (styles, {}) => {
    return {
      padding: "10px",
      backgroundColor: "#272838",
      margin: "5px 0px",
      borderRadius: "10px",
      ":hover": {
        cursor: "pointer",
        backgroundColor: "#2E2F40",
      },
    };
  },
  placeholder: (styles, {}) => {
    return {
      ...styles,
      color: "white",
    };
  },
};

const SelectComponent = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ value, onChange, options, isLoading }) => {
    const radius = 130;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        id="customMultiSelect"
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #05D397,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[3px] rounded-lg transition duration-300 group/input"
      >
        <Select
          isMulti
          options={options}
          styles={colourStyles}
          placeholder="Select Persons"
          isLoading={isLoading}
          noOptionsMessage={() => {
            return "No many user";
          }}
          value={value}
          required={true}
          onChange={onChange}
        />
      </motion.div>
    );
  }
);

SelectComponent.displayName = "Input";

export { SelectComponent };
