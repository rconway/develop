#!/usr/bin/env bash

# Apache Bench
ab -r -n 10000 -c 100 http://localhost:3000/
