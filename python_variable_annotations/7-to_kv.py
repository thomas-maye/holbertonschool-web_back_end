#!/usr/bin/env python3
""" Module to convert a float to a string """


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Function to convert a float to a string """
    return (k, v * v)
