#!/usr/bin/env python3
"""A coroutine that generates 10 random numbers between 0 and 10."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """The coroutine will loop 10 times, each time asynchronously
    yielding a random number between 0 and 10."""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
