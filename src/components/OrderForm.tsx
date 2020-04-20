// @ts-nocheck
import React from "react";
import styled from "@emotion/styled";
import uniqBy from "lodash/uniqBy";

import {
  Box,
  RadioButtonGroup,
  Radio,
  Heading,
  HeadingProps,
} from "@chakra-ui/core";

import { CakeVariant } from "./CakeImg";
import {
  GetProductDetails_productByHandle_variants_edges,
  GetProductDetails_productByHandle_variants_edges_node_selectedOptions,
  GetProductDetails_productByHandle_options,
  GetProductDetails_productByHandle,
} from "./__generated__/GetProductDetails";

const OptionTitle: React.FC<HeadingProps> = (props) => (
  <Heading
    as="h3"
    size="sm"
    textTransform="lowercase"
    overflowWrap="breakWord"
    {...props}
  />
);

const RadioButtonGrid = styled(RadioButtonGroup)`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const RadioButton = styled(Radio)`
  margin-bottom: 5px;

  & div {
    color: unset;
  }
`;

const filterVariants = (
  parentArr: GetProductDetails_productByHandle_variants_edges[],
  name: string,
  value: string
) =>
  parentArr.filter(
    (variant: GetProductDetails_productByHandle_variants_edges) =>
      variant.node.selectedOptions.some(
        (
          option: GetProductDetails_productByHandle_variants_edges_node_selectedOptions
        ) => option.name === name && option.value === value
      )
  );

const parseValuesFromOption = (
  parentArr: GetProductDetails_productByHandle_variants_edges_node_selectedOptions[],
  name: string
) =>
  uniqBy(
    parentArr.map((variant: GetProductDetails_productByHandle_variants_edges) =>
      variant.node.selectedOptions.find(
        (
          option: GetProductDetails_productByHandle_variants_edges_node_selectedOptions
        ) => option.name === name
      )
    ),
    "value"
  );

const OrderForm: React.FC<
  GetProductDetails_productByHandle & {
    findMatchingVariant?: (
      size: string,
      layer: string,
      frosting: string
    ) => void;
    selectedVariant?: GetProductDetails_productByHandle_variants_edges;
    setCakeVariant: React.Dispatch<CakeVariant>;
  }
> = ({
  selectedVariant,
  findMatchingVariant,
  setSelectedOptions,
  setCakeVariant,
  ...props
}) => {
  const { options, variants, priceRange } = props;
  const sizes: string[] = options[0] || [];
  const [size, onSizeChange] = React.useState<string>();

  const [frostingOptions, setFrostingOptions] = React.useState<
    GetProductDetails_productByHandle_variants_edges[]
  >([]);
  const frostingFlavors: GetProductDetails_productByHandle_options = options[2];
  const [frosting, onFrostingChange] = React.useState<string>();

  const [layerOptions, setLayerOptions] = React.useState<
    GetProductDetails_productByHandle_variants_edges[]
  >([]);
  const layers: GetProductDetails_productByHandle_options = options[1];
  const [layer, onLayerChange] = React.useState<string>();

  React.useEffect(() => {
    setCakeVariant({ size, layer: layer || "Single", frosting });
    size && layer && frosting && findMatchingVariant(size, layer, frosting);
  }, [size, layer, frosting]);

  React.useEffect(() => {
    if (size && frosting) return;
    const sizeFilteredVariants = filterVariants(variants.edges, "Size", size);
    const frostingVariants = parseValuesFromOption(
      sizeFilteredVariants,
      "Frosting Flavor"
    );
    setFrostingOptions(frostingVariants);
  }, [size]);

  React.useEffect(() => {
    const sizeFilteredVariants = filterVariants(variants.edges, "Size", size);
    const frostingFilteredVariants = filterVariants(
      sizeFilteredVariants,
      "Frosting Flavor",
      frosting
    );
    const layerVariants = parseValuesFromOption(
      frostingFilteredVariants,
      "Layers"
    );
    setLayerOptions(layerVariants);
  }, [size, frosting]);

  return (
    <Box>
      <OptionTitle
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px dashed gray"
        mt={0}
      >
        <Box>Price: </Box>
        {selectedVariant ? (
          <OptionTitle fontWeight="300" m={0}>
            ${parseInt(selectedVariant.node.priceV2.amount).toFixed(2)}
          </OptionTitle>
        ) : (
          <OptionTitle fontWeight="300" m={0}>
            ${parseInt(priceRange.minVariantPrice.amount).toFixed(2)} - $
            {parseInt(priceRange.maxVariantPrice.amount).toFixed(2)}
          </OptionTitle>
        )}
      </OptionTitle>
      <Box my={3}>
        <OptionTitle>{sizes.name}</OptionTitle>
        <RadioButtonGrid
          onChange={(value: string) => onSizeChange(value)}
          value={size}
        >
          {sizes.values.map((value: string, index: number) => (
            <RadioButton textTransform="lowercase" key={index} value={value}>
              {value}
            </RadioButton>
          ))}
        </RadioButtonGrid>
      </Box>
      {size && frostingOptions.length > 0 && (
        <Box my={3}>
          <OptionTitle>{frostingFlavors.name}</OptionTitle>
          <RadioButtonGrid
            onChange={(value: string) => onFrostingChange(value)}
            value={frosting}
          >
            {frostingOptions.map(
              (
                {
                  value,
                }: GetProductDetails_productByHandle_variants_edges_node_selectedOptions,
                index: number
              ) => (
                <RadioButton
                  key={index}
                  value={value}
                  textTransform="lowercase"
                >
                  {value}
                </RadioButton>
              )
            )}
          </RadioButtonGrid>
        </Box>
      )}
      {size && frosting && layerOptions.length > 0 && (
        <Box my={3}>
          <OptionTitle>{layers.name}</OptionTitle>
          <RadioButtonGrid
            onChange={(value: string) => onLayerChange(value)}
            value={layer}
          >
            {layerOptions.map(
              (
                {
                  value,
                }: GetProductDetails_productByHandle_variants_edges_node_selectedOptions,
                index: number
              ) => (
                <RadioButton
                  textTransform="lowercase"
                  key={index}
                  value={value}
                >
                  {value}
                </RadioButton>
              )
            )}
          </RadioButtonGrid>
        </Box>
      )}
    </Box>
  );
};

export default OrderForm;
