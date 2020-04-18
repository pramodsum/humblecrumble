
        variables
      });

      dispatch(actions.product.success({ data: data.productByHandle }));
    } catch (error) {
      dispatch(actions.product.failure({ error }));
    }
  };
}